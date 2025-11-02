# Folder Backup To Location

A VS Code extension to back up selected folders to a configurable destination directory with a timestamped copy.

## Features

- Right-click on any folder in the Explorer to trigger the backup.
- Stores timestamped backups in the folder you configure (or choose on the fly).

## Installation

- Install directly from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=DominikVsetecka.folder-backup-to-location).
- Optional manual install: package with `npx @vscode/vsce package` and use "Install from VSIX…" in VS Code.

## Usage

1. Set `Folder Backup To Location › Backup Target Folder` in VS Code settings (optional). Use a plain absolute path without wrapping it in quotes (e.g. `/Users/you/Cloud Drive/backups`).
2. Right-click on a folder in the Explorer.
3. Select "Backup folder to location".
4. The extension copies the folder into the configured destination (or asks you to choose one) with a timestamp appended.

## Settings

- `Folder Backup To Location › Backup Target Folder`: Optional default destination for backups. Use a plain absolute path without quotes.
- `Folder Backup To Location › Exclude Node Modules`: When enabled, skips every `node_modules` directory during the copy.

## Requirements

- VS Code 1.105.0 or higher.

## License

MIT
