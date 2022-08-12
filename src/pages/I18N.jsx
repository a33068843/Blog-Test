import styled from 'styled-components';
import { colors } from 'styles';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: calc(8px + 2vmin);
  color: ${colors.gray150};
  margin-bottom: 2rem;
`;
const SubTitle = styled.h2`
  font-size: calc(2px + 2vmin);
  color: ${colors.gray150};
`;

export const I18N = () => {
  const { t } = useTranslation();
  const a = 1;
  return (
    <Container>
      <Title> {t('common')} Welcome to the Jurassic World!</Title>
      <Title>{t('test', { count: 0 })}</Title>
      <Title>{t('test', { count: a })}</Title>
      <Title>{t('test', { count: 2 })}</Title>
      <Title>{t('test', { count: 3 })}</Title>
      <SubTitle>There are dinosaurs!</SubTitle>
    </Container>
  );
};
