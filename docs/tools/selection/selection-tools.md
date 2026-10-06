# Selection Tools

Selection Tools combines boundary-aware loop selection and context-sensitive region filling.

## Loop Limits

Enable Loop Limits and use Blender's normal edge-loop selection. The **Sharp**, **Seams**, and **Selected** settings limit where the loop continues. Turn all three off for unrestricted loop selection. Adjust the current operation in Blender's last-operation panel.

Disable Loop Limits to return the shortcut to Blender's native loop selection.

## Select Fill

Double-click a bounded area in Mesh Edit Mode to fill an unselected region or remove a selected region. Sharp, Seam, Selected, and Corner settings constrain the fill. Hidden geometry is excluded.

Select Fill follows Blender's configured select-mouse preference. Its edge picking uses a small screen-space tolerance and only the frontmost visible geometry.

Selection Tools supports Blender 4.3 through 5.2. Select Similar integration is optional and requires Pattern Select.
