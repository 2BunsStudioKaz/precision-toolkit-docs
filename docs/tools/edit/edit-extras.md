# Edit Extras

Edit Extras groups **Extract Selection**, **Bevels**, **Edge Railing**, and **Auto Mirror** for mesh work.

## Extract Selection

In Mesh Edit Mode, use F3 or double-tap **1**, **2**, or **3** to extract the selection that existed before the first tap. A single tap still changes Blender's selection mode. Extracting a whole mesh or complete connected island asks you to confirm; cancel leaves the geometry unchanged.

## Bevels

Use your existing edge-bevel shortcut. Edit Extras selects native Vertex Bevel when the selected vertices share no mesh edge; if any selected pair is connected, it starts native Edge Bevel. Blender retains control of the bevel operation and its redo settings.

## Edge Railing

Select an edge chain or loop and press **Alt+R** in the 3D Viewport. Drag in the direction you want or enter an angle. Hold Alt again for precision movement. Confirm with left-click or Enter; cancel with right-click or Esc.

## Auto Mirror

Enable Auto Mirror in its tool settings and press **Alt+M**. Choose a signed local axis in the viewport picker. In Object Mode it creates or reuses the modifier named **Auto Mirror**. In Edit Mode it mirrors the selected geometry across the chosen axis. Finish or cancel the operation before disabling the tool.

Edit Extras supports Blender 4.3 through 5.2. Fill Quad, Align Tools, and Inset are separate packages.
