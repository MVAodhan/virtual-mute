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
	ID       int    `json:"id"`
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

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) ToggleShortcut(key string, shift, ctrl bool) {

	if shift && ctrl {
		robotgo.KeyTap(key, "ctrl", "shift")
	}
}

func (a *App) ReadJson(pathToRead string) []Shortcut {

	byteValue, err := os.ReadFile(pathToRead)

	if err != nil {
		log.Printf("cant read file : %s", err)
	}

	// Parse the JSON data
	var shortcuts []Shortcut
	err = json.Unmarshal(byteValue, &shortcuts)
	if err != nil {
		log.Println(err)

	}

	_ = json.Unmarshal([]byte(byteValue), &shortcuts)

	// fmt.Println(shortcuts)

	return shortcuts
}

func (a *App) CheckShortcuts() []Shortcut {
	homeDir, _ := os.UserHomeDir()

	shortcutsPath := homeDir + "\\shortcuts.json"

	info, err := os.Stat(shortcutsPath)

	if err != nil {
		fileExists := os.IsNotExist(err)
		log.Println(fileExists, "file does not exists")
		return nil
	} else {
		log.Println(info)
	}

	shortcuts := a.ReadJson(shortcutsPath)

	return shortcuts
}

func (a *App) AppendShortcut() {

	homeDir, _ := os.UserHomeDir()

	shortcutsPath := homeDir + "\\shortcuts.json"

	shortcuts := a.CheckShortcuts()

	shortcuts = append(shortcuts, Shortcut{ID: 2, KeyValue: "F", Ctrl: true, Shift: true})

	jsonBytes, err := json.Marshal(shortcuts)
	if err != nil {
		fmt.Println(err)
		return
	}
	err = os.WriteFile(shortcutsPath, jsonBytes, 0644)
	if err != nil {
		log.Fatal(err)
	}

}

func (a *App) RemoveByID(idToRemove int) []Shortcut {
	shortcuts := a.CheckShortcuts()

	var newShortcuts []Shortcut
	for _, shortcut := range shortcuts {
		if shortcut.ID != idToRemove {
			newShortcuts = append(newShortcuts, shortcut)
		}
	}
	return newShortcuts

}
