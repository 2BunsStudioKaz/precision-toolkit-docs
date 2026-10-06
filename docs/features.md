# Instancer Features

Instancer keeps reusable collection contents linked while providing a controlled way to edit nested instances.

## Nested editing

Enter an instance with **Tab**. Use **Up** and **Down** to move through nested levels and **Exit** to apply the current level. **Exit All** closes open levels. **Cancel Instance** realizes selected instances as regular objects; it does not cancel the current edit session.

## Create Unique

Create a separate copy when you need to edit an instance independently. Existing Geometry Nodes modifiers, input values, and shared node groups are preserved. Shared groups remain shared; duplicate a node group yourself when you need an independent node setup.

## Bake

Bake converts supported evaluated mesh, curve, surface, and text content to mesh output. Unsupported types such as lights, cameras, and metaballs are excluded. Bake does not insert Realize Instances nodes or guarantee that unrealized Geometry Nodes instances become mesh geometry.

## Materials browser

The Materials browser lists actual slots by nested level and reports how many distinct objects at that level use each material. Material names can be edited in the list; renaming a shared material affects all its users. The browser is for inspection and renaming, not assignment.

## Masks and level outlines

The viewport display can identify nested levels with outlines and masks. Visibility follows the displayed instance occurrence and its source path. Open curves without a surface do not produce filled masks.

## Undo and recovery

Instancer validates captured edits before applying them and uses Blender's Undo system for completed operations. If the source selection or geometry changes during an operation, rerun the operation to capture the new state.
