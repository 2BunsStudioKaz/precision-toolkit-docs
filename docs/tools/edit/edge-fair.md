# Edge Fair

Edge Fair reshapes selected edge sections so they follow the surrounding surface flow.

## Workflow

1. In Mesh Edit Mode, select one or more non-branching edge chains or loops.
2. Make sure the surrounding crossing flow uses quad topology.
3. Run **Edge Fair** from the Edit panel or F3.
4. Adjust the result in Blender's **Adjust Last Operation** panel.

## Controls

- **Influence** blends between the original positions and the full result.
- **Curvature** controls how strongly the section follows the surrounding flow.
- **Distribution** changes between the current projected spacing and even spacing.
- **Falloff** chooses a linear or smooth transition.
- **Start** and **End** set how many ordered selected sections blend from each end.

A non-quad face directly touching the selected edge is unsupported. Branched flows can only be processed when both end falloffs are zero. Edge Fair supports Blender 4.3 through 5.2.
