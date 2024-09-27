package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/go-vgo/robotgo"
)

type Shortcut struct {
	ID       string `json:"id"`
	KeyValue string `json:"keyValue"`
	Ctrl     bool   `json:"ctrl"`
	Shift    bool   `json:"shift"`
}

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

var userDir string

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	userDir, _ := os.UserHomeDir()

	_, err := os.Stat(userDir + "\\virtual-mute")
	notExists := os.IsNotExist(err)

	if notExists {
		homeDir := fmt.Sprintf("%s\\virtual-mute", userDir)
		err := os.Mkdir(homeDir, 0755)
		if err != nil {
			log.Panicln("folder could no be created")
		}
		if err == nil {
			log.Println("directory created ")
		}
	} else {
		fmt.Println("dir exists")
	}

}

func (a *App) ToggleShortcut(key string, shift, ctrl bool) {
	if shift && ctrl {
		robotgo.KeyTap(key, "ctrl", "shift")
	}
}
func (a *App) CheckShortcuts() bool {

	userDir, err := os.UserHomeDir()

	if err != nil {
		log.Panicln("cant read user dir")
	}

	shortcutsPath := userDir + "\\virtual-mute\\shortcuts.json"

	_, err = os.Stat(shortcutsPath)

	if err != nil {
		fileNotExist := os.IsNotExist(err)
		return fileNotExist
	}

	return false
}

func (a *App) ReadJson() []Shortcut {

	userDir, err := os.UserHomeDir()

	if err != nil {
		log.Panicln("cant find home dir")
	}
	shortcutsNotExist := a.CheckShortcuts()

	if !shortcutsNotExist {
		var shortcuts []Shortcut
		byteValue, err := os.ReadFile(userDir + "\\virtual-mute\\shortcuts.json")

		if err != nil {
			log.Printf("cant read file : %s", err)
		}
		err = json.Unmarshal(byteValue, &shortcuts)
		if err != nil {
			log.Println(err)

		}
		_ = json.Unmarshal([]byte(byteValue), &shortcuts)
		return shortcuts
	}

	return nil

}

func (a *App) AppendShortcut(shortcuts any) {

	userDir, err := os.UserHomeDir()

	if err != nil {
		log.Panicln("cannot get user home dir")
	}

	jsonBytes, err := json.Marshal(shortcuts)

	if err != nil {
		log.Panicln("cant marshal map")
	}
	var shortcutJson interface{}

	err = json.Unmarshal(jsonBytes, &shortcutJson)

	if err != nil {
		log.Println("can't unmarshal data")
	} else {
		log.Println(shortcutJson)
	}

	shortcutsNotExist := a.CheckShortcuts()

	if shortcutsNotExist {
		err := os.WriteFile(userDir+"\\virtual-mute\\shortcuts.json", []byte(jsonBytes), 0644)
		if err == nil {

			log.Println("file created")
		} else {
			log.Println("err writing file ")
		}
	} else {
		log.Println("shortcuts already exist")
	}

	// shortcutsPath := userDir + "\\shortcuts.json"

	// jsonBytes, err := json.Marshal(shortcuts)

	// shortcuts = append(shortcuts, Shortcut{ID: 2, KeyValue: "F", Ctrl: true, Shift: true})

	// jsonBytes, err := json.Marshal(shortcuts)
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }
	// err = os.WriteFile(shortcutsPath, jsonBytes, 0644)
	// if err != nil {
	// 	log.Fatal(err)
	// }

}

// func (a *App) RemoveByID(idToRemove string) []Shortcut {
// 	shortcuts := a.CheckShortcuts()

// 	var newShortcuts []Shortcut
// 	for _, shortcut := range shortcuts {
// 		if shortcut.ID != idToRemove {
// 			newShortcuts = append(newShortcuts, shortcut)
// 		}
// 	}
// 	return newShortcuts

// }
