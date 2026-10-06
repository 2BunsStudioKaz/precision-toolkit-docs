# ReCloth

ReCloth generates seam-aligned quad garment topology from a mesh and its UV layout.

## Generate garment topology

1. Prepare a garment mesh with a usable UV layout. Its UV seams should mark the panel boundaries you want ReCloth to follow.
2. Open ReCloth from its Prototype controls and choose **Grid Density**.
3. Run **Generate** and wait for the job to finish. Use **Cancel** to stop a long run safely.

Very high grid density can require substantial time and memory; ReCloth asks for confirmation before starting an especially demanding job. It supports Blender 4.3 through 5.2.
