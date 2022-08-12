import { useCallback } from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
// import { colors } from 'styles';

const Container = styled.div`
  padding: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Canvas = styled.canvas`
  max-width: 100%;
  max-height: 100%;
  background: #1c1e22;
  border-radius: 4px;
`;

export const Tetris = () => {
  const canvasRef = useRef(null);

  const draw = useCallback((ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(
      50,
      100,
      20 * Math.sin(frameCount * 0.05) ** 2,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <Container>
      <Canvas id={'canvas'} ref={canvasRef} />
    </Container>
  );
};
