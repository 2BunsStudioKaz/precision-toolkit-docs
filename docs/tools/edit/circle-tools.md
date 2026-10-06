# Circle Tools

Circle Tools combines **ReCircle**, **Incircle**, and **ReArch** in one Edit Mode add-on.

## ReCircle

Circularize selected loops. Supported filled interiors can adapt with the loop so the surrounding topology remains part of the result.

## Incircle

Fit a tangent circle inside a selected surrounding boundary. Use it when you want a circle that sits inside the available outline.

## ReArch

Select a face region or an open edge chain and run ReArch. Choose **Full** or **Broken** to shape the arch. Full creates a continuous arch; Broken adds an adjustable interruption. **Resolution** controls how smoothly the arc is represented by mesh sections. Orientation, axis, rise, offsets, Follow, and Influence controls help place the result.

ReArch works on one mesh object at a time and supports disconnected selections within that object. Closed or branching edge chains and regions without a usable boundary can be rejected. The fit is approximate on irregular or overlapping surfaces; review the result before continuing.

Circle Tools supports Blender 4.3 through 5.2. In the Host, ReCircle, Incircle, and ReArch appear together in the Edit Mode menu.
