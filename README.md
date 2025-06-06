# FoundryVTT Better Turn Markers

This module aims to enhance turn marker capabilities in Foundry VTT. It provides an extended list of configuration
options that allow users to take more control over how turn markers are rendered — from scaling over opacity to
displacing them.

## List of new turn marker configuration options

### Opacity

Define how translucent your turn marker is from a scale of 0 to 1 (0-100%).

| 100% | 50% |
| ---- | ----- |
| ![100%](https://github.com/user-attachments/assets/e8166b07-7c2b-401e-a145-a42a16484776) | ![50%](https://github.com/user-attachments/assets/511de6f7-92bf-4a60-86bc-12512680340e) |

### Scale

Scale the turn marker from 0.05 to 5 (5-500%) of the token size.

| 185% | 300% |
| ---- | ----- |
| ![185%](https://github.com/user-attachments/assets/e8166b07-7c2b-401e-a145-a42a16484776) | ![300%](https://github.com/user-attachments/assets/b0114f0b-4ff2-4a7a-8d7c-73452d44d5b2) |

### Anchor

Define the center point of the turn marker. If set to spin, this is also the point that the
animation will spin around.

|  | Left                                                                                            | Center                                                                                     | Right                                                                                            |
| --- |-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Top** | ![Top left](https://github.com/user-attachments/assets/22922cac-d456-4786-be65-17d228dd3c93)    | ![Top](https://github.com/user-attachments/assets/2e1c5596-9cf3-4195-bc73-d4a62182ccb3)    | ![Top right](https://github.com/user-attachments/assets/05854744-b9f8-4a7d-a4a9-6dafccc79f7e)    |
| **Center** | ![Left](https://github.com/user-attachments/assets/e91106d6-cba4-4cd5-a7fe-9e342b991496)        | ![Center](https://github.com/user-attachments/assets/e8166b07-7c2b-401e-a145-a42a16484776) | ![Right](https://github.com/user-attachments/assets/b02870b8-aa0e-4001-a4ae-b0f3bf291d8b)        |
| **Bottom** | ![Bottom left](https://github.com/user-attachments/assets/a52a7a4f-4412-4d76-a5be-80b75b0ff4b8) | ![Bottom](https://github.com/user-attachments/assets/79cf9b0d-dbf8-492f-8940-37b4b44e31c5) | ![Bottom right](https://github.com/user-attachments/assets/36d499c4-80a0-4c89-a350-bc2b36959975) |

### Offset (X-Axis)

Offset the center point horizontally in grid spaces for fine-tuned positioning.

| 0 | 0.5 | -0.75 |
| ---- | ----- | ---- |
| ![0](https://github.com/user-attachments/assets/ba1ddaa8-f3e7-436d-b938-4116f273d355) | ![0.5](https://github.com/user-attachments/assets/d88af90e-3ca9-414e-ab8b-e4ce56927615) | ![-0.75](https://github.com/user-attachments/assets/f8fabc17-a719-4353-8703-c3aaa8bb47cf) |

### Offset (Y-Axis)

Offset the center point vertically in grid spaces for fine-tuned positioning.

| 0 | 0.5 | -0.75 |
| ---- | ----- | ---- |
| ![0](https://github.com/user-attachments/assets/ba1ddaa8-f3e7-436d-b938-4116f273d355) | ![0.5](https://github.com/user-attachments/assets/54fb4b59-f03c-4639-af94-e7e16bb4934d) | ![-0.75](https://github.com/user-attachments/assets/f82fbd71-24fd-4cd9-a4f4-447156a82d38) |

### Elevation

Define, whether the turn marker is rendered above or below the token.

| Below | Above |
| ---- | ----- |
| ![below](https://github.com/user-attachments/assets/e8166b07-7c2b-401e-a145-a42a16484776) | ![above](https://github.com/user-attachments/assets/3ef39d08-5bc6-41e1-b9c4-4e1158e089db) |

### Spin Direction

If the turn marker animation is including a spin, this setting defines which direction the animation
spins in (either `left` or `right`).

| Left | Right |
| ---- | ----- |
| ![left](https://github.com/user-attachments/assets/2b547103-d92e-48b8-a193-0138cc5a5fa1) | ![right](https://github.com/user-attachments/assets/09605e2d-4cdf-45cf-8be4-acdef25063cf) |

### Animation Speed

Define the speed of the animation (rotation, pulse, etc.)

| x0.5 | x1 | x5 | x10 |
| ---- | -- | -- | --- |
| ![x0.5](https://github.com/user-attachments/assets/6af1c1c0-5b5d-47bb-9c6d-6e5b7dc0a235) | ![x1](https://github.com/user-attachments/assets/1bead850-2bb1-4854-9ad1-7fad573c970c) | ![x5](https://github.com/user-attachments/assets/a3a869e5-4897-4733-933e-40c127e84b67) | ![x10](https://github.com/user-attachments/assets/8e4edc88-c88a-4a24-937b-8c50c2ffc2bc) |

# Credits

- The screenshots included in this readme present the following graphics. They are for illustrative purpose only, and not included in this package:
  - [Cowled](https://game-icons.net/1x1/lorc/cowled.html) by [Lorc](https://lorcblog.blogspot.com/) under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
  - The [Foundry VTT Logo](https://foundryvtt.com/)
