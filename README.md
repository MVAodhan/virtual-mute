# README

## Requirements

#### GCC
    
- Windows https://code.visualstudio.com/docs/cpp/config-mingw (no need to install VSCode or the extension)
- Mac can be found here https://github.com/go-vgo/robotgo


## About

**Right Now Virtual-Mute has only been tested to work on windows.**

Virtual-Mute is a small and simple accessability utility desktop app.

You can set custom shortcuts in the UI to easily trigger them from the GUI

*Settings Icon > Add Shortcute*

 - The first field is the key
 - The Second is a checkBox for Ctrl 
 - The Third is a checkBox for Shift 

You'll need to set up your shortcut of choice in the platform.

e.g Discord : Settings > Keybinds set the action to Toggle Mute and Keybind the same as the one you set up in Virtual-Mute

# Build from Source

## Wails build requirements 

Wails has a number of common dependencies that are required before installation:

- Go 1.20+ *(go 1.22 is recommended for this project i.e in go.mod)*
- NPM (Node 15+)
- Wails CLI Run ```go install github.com/wailsapp/wails/v2/cmd/wails@latest``` to install the Wails CLI.

#### Windows
   
Wails requires that the WebView2 runtime is installed. Some Windows installations will already have this installed. You can check using the ```wails doctor``` command.

#### Mac

Wails requires that the xcode command line tools are installed. This can be done by running ```xcode-select --install```.

## Project build instructions 

- Clone the repo
- Run wails build

*Refer to bin/README.md for more build output details*
