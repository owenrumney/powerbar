import { container, arrow, content } from "./style.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const memoryConsumption = output.free;
  return (
    <div style={container}>
      <div style={arrow} />
      <div style={content}>
        <i class="fas fa-memory" />
        &nbsp;{memoryConsumption}%
      </div>
    </div>
  );
};

export default render;
