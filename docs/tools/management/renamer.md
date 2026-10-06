# Renamer

Renamer provides structured naming for objects, collections, and bone chains.

## Name multiple objects

In Object Mode, enable **Auto Rename**, select the objects, and edit the active object's name in Blender's native name field. Committing a base such as **chair** gives the active object **chair_a**, then names the other selected objects in order (**chair_b**, **chair_c**, and so on). Existing names are used to determine a repeatable order.

## Apply a naming pattern

Select objects, or leave selection empty to use the active collection's direct objects. Use the Renamer controls to build names from type, object, optional variant, collection ID, and piece ID. Review locks and prefixes before applying. The tool validates the complete batch before changing names.

## Rename bone chains

In Armature Edit Mode with Auto Rename enabled, select an unbranched chain and rename the active bone in Bone Properties. Renamer propagates alphabetic IDs along the chain. An unselected gap creates separate chains; branching selections are rejected.

Auto Rename also handles newly duplicated bones and mirrored side suffixes. Review the naming preferences and tolerance before using it on a rig.

Renamer supports Blender 4.3 through 5.2.
