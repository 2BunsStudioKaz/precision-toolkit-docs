# Inset

Inset provides Blender-style inset and outset operations with corner protection and surface-aware placement.

## Use

In Mesh Edit Mode, use Blender's Inset command or the configured shortcut, then adjust **Thickness**, **Depth**, and other available operation options in Blender's last-operation panel. Positive Thickness moves the inset inward; negative Thickness creates an outset.

## Interactive options

- **I** toggles Individual.
- **B** toggles Boundary.
- **R** toggles Edge Rail.
- **S** toggles Smart Inset.
- Hold **Shift** for precision and **Ctrl** for Depth, including numeric entry.

The status bar displays the available key hints. During numeric entry, letters are treated as units, so option-toggle hints are temporarily unavailable. Smart Inset changes topology and is not a general collision guarantee.

Install the Inset package separately from Edit Extras. Do not enable both a legacy Inset and the current package. Supports Blender 4.3 through 5.2.
