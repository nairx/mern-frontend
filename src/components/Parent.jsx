import React from "react";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

function Parent() {
  const products = useFetch("https://jsonplaceholder.typicode.com/users")
  return <div>{products.length}</div>;
}

export default Parent;
