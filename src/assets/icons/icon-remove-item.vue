<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        fill="#CAAFA7"
        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
      />
    </svg>
  </div>
</template>

<style scoped>
div {
  display: grid;
  place-items: center;
  border: 1px solid grey;
  border-radius: 50%;
  padding: 4px;
}
div:hover {
  cursor: pointer;
  transform: scale(1.1);
}

path {
  fill: grey;
  opacity: 0.8;
}
</style>