import React from "react";

export function WithImplicitRole() {
  return <s>Strike-through without role</s>;
}

export function WithExplicitRole() {
  return <s role="deletion">Strike-through with role</s>;
}

