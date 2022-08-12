import styled from 'styled-components/macro';
import { colors } from 'styles';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Home, I18N, Tetris } from 'pages';

const BodyContainer = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: ${colors.background};
`;

export const Base = () => {
  return (
    <BodyContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tetris' element={<Tetris />} />
        <Route path='/i18n' element={<I18N />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BodyContainer>
  );
};
