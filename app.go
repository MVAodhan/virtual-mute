package main

import (
	"context"
	"log"
	// _ "github.com/go-vgo/robotgo"
)

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

// func (a *App) ToggleShortcut(key string, ctrl, shift bool) {

// 	if ctrl == true && shift == true {
// 		log.Printf("Shortcut: %v Ctrl Shift", key)
// 	} else {
// 		log.Printf("Shortcut: %v", key)

// 	}

//		// robotgo.KeyTap(key, args...)
//	}
func (a *App) ToggleShortcut(key string, shift, ctrl bool) {

	if shift && ctrl {
		log.Println("Shortcut:", "d", "Shift", "Ctrl")
	} else {
		log.Println("Shortcut:", "d")

	}

	// robotgo.KeyTap(key, args...)
}
