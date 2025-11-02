# Folder Backup To Location

A VS Code extension to back up selected folders to a configurable destination directory with a timestamped copy.

## Features

- Right-click on any folder in the Explorer to trigger the backup.
- Stores timestamped backups in the folder you configure (or choose on the fly).

## Installation

1. Package the extension: `npx @vscode/vsce package`
2. Install the generated .vsix file in VS Code.

## Usage

1. Set `Folder Backup To Location › Backup Target Folder` in VS Code settings (optional). Use a plain absolute path without wrapping it in quotes (e.g. `/Users/you/Cloud Drive/backups`).
2. Right-click on a folder in the Explorer.
3. Select "Backup folder to location".
4. The extension copies the folder into the configured destination (or asks you to choose one) with a timestamp appended.

## Requirements

- VS Code 1.105.0 or higher.

## License

MIT
