package main

import (
	"context"
	"encoding/json"

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

func (a *App) ReadJson() []Shortcut {

	curDir, err := os.Getwd()
	if err != nil {
		log.Panic(err)
	}

	shortcutsPath := curDir + "\\frontend\\dist\\assets"

	byteValue, err := os.ReadFile(shortcutsPath + "\\shortcuts.json")

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
