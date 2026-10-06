# Install Precision Toolkit

Precision Toolkit 1.4 is a host add-on plus separately packaged tools. The Host discovers tool ZIPs in a folder you choose, then combines their panels, preferences, and supported menu actions.

## Requirements

The release supports Blender 4.3 through 5.2. The release was tested on Windows with Blender 4.3.2 and 5.2.2; other versions in that range are declared compatible but were not individually qualified by that test run. Some tools have additional requirements noted on their pages.

## Install the Host and tools

1. Keep the complete Precision Toolkit release folder somewhere permanent. Leave its category folders and ZIP names intact.
2. In Blender, open **Edit > Preferences > Add-ons**, choose **Install from Disk**, and select **host/precision_toolkit_v1.4.0.zip**.
3. Enable **Precision Toolkit**.
4. Open the Host add-on preferences and set **External Tools Folder** to the release folder that contains the category folders. Do not choose the host folder or Blender's add-ons folder.
5. Confirm the folder. The Host finds compatible tool packages and loads enabled tools.
6. Use **Refresh Tools** after adding, replacing, or removing tool ZIPs.

The Host accepts tool contract 1.4. Incompatible or duplicate packages are reported instead of loaded.

## Standalone installation

A tool ZIP can be installed by itself through **Preferences > Add-ons > Install from Disk**. Enable either the standalone tool or its copy through the Host, never both at once. Running both copies can register the same Blender operators twice.

## Updating

Install a new Host ZIP and restart Blender to update the Host. Replace the external tool ZIPs with their matching release versions, then refresh tools. Your Host layout choices and individual tool settings are retained unless a tool page says otherwise.
