# Instancer

Instancer creates reusable collection instances and lets you work inside nested instances without losing the source collection structure. It is listed in the Scene group on the overview.

**Related guides:** [Quick Start](quick-start.md) · [Features](features.md)

## Create and edit an instance

1. Select the objects you want to package, then run **Create Instance** from the Instancer controls or the Host's Object Mode menu.
2. Set the collection name. The automatic naming option previews the final name and can be turned off when you want to use your own name.
3. Select the instance and enter its nested edit session with **Tab**. Make changes and use **Exit** to apply the level you are editing.
4. Use **Up** and **Down** to move between nested levels. Use **Exit All** to close all open levels.

**Cancel Instance** converts selected collection instances into regular objects; it is a realization action, not a way to discard edits. Use Blender Undo to reverse a completed operation.

## Unique copies and baking

**Create Unique** makes a separate copy for editing while preserving existing Geometry Nodes modifiers and their settings. **Bake Instance** converts supported evaluated geometry into mesh output. Unsupported object types are excluded, and baking does not guarantee that unrealized Geometry Nodes instances become geometry.

## Materials and display

The Materials browser lists real material slots by nested level and counts distinct objects using each material. Double-click an editable material name to rename the shared material. The browser does not assign or remove materials. Instance outlines and masks help distinguish nested levels; their settings are available in the tool controls.

## Compatibility

Instancer supports Blender 4.3 through 5.2. It can run through the Host or as a standalone add-on; use only one route at a time. See [Installation](installation.md) and the [Instancer feature reference](features.md).
