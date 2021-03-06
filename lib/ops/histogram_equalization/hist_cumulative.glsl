/**
 * @license MIT
 * @author Arkadiy Pilguk(apilguk@gmail.com)
 * @author Mihail Zachepilo(mihailzachepilo@gmail.com)
 * Copyright 2018 Peculiar Ventures and Pentatonica.
 * All rights reserved.
 */

vec4 operation(float y, float x) {
  vec4 sum = vec4(0.0);

  for (float i = 0.0; i < 255.0; i += 1.0) {
    vec4 value = pickValue_tSrc(0.0, i);

    if (i <= x) {
      sum += value;
    } else {
      break;
    }
  }

	return sum;
}
