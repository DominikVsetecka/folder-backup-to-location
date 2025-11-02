const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
  const disposable = vscode.commands.registerCommand('extension.backupFolderToLocation', async (uri) => {
    const srcFolder = uri?.fsPath;

    if (!srcFolder) {
      vscode.window.showErrorMessage('No folder selected for backup.');
      return;
    }

    const config = vscode.workspace.getConfiguration('folderBackupToLocation');
    let backupRoot = config.get('backupTargetFolder', '').trim();
    const excludeNodeModules = config.get('excludeNodeModules', false);

    if (!backupRoot) {
      const openResult = await vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        openLabel: 'Select backup destination folder'
      });

      if (!openResult || openResult.length === 0) {
        vscode.window.showWarningMessage('Backup cancelled: No destination selected.');
        return;
      }

      backupRoot = openResult[0].fsPath;
    }

    const srcFolderName = path.basename(srcFolder);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFolderName = `${srcFolderName}_backup_${timestamp}`;
    const backupFolder = path.join(backupRoot, backupFolderName);

    try {
      fs.mkdirSync(backupRoot, { recursive: true });
      fs.cpSync(srcFolder, backupFolder, {
        recursive: true,
        filter: (source) => {
          if (!excludeNodeModules) {
            return true;
          }

          const relativePath = path.relative(srcFolder, source);

          if (!relativePath) {
            return true;
          }

          const segments = relativePath.split(path.sep);
          return !segments.includes('node_modules');
        }
      });

      const messageSuffix = excludeNodeModules ? ' (node_modules excluded)' : '';
      vscode.window.showInformationMessage(`Backup created: ${backupFolder}${messageSuffix}`);
    } catch (err) {
      vscode.window.showErrorMessage(`Backup failed: ${err.message}`);
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
