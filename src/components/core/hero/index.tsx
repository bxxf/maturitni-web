import React, { useState } from 'react';

import tw from 'twin.macro';
import styled from '@emotion/styled';

import Dropdown from './dropdown';
import DropdownContext from '@/context/dropdown';

const HeroWrapper = styled.div`
  ${tw`flex flex-col justify-center`}
  padding: 0 12%;
  min-height: 90vh;
`;
const Caption = tw.div`text-hero-caption uppercase mobile:text-sm mb-2`;

const Title = styled.h1`
  ${tw`text-primary font-black w-1/2  mobile:text-3xl mobile:my-4 text-4xl desktop:text-5xl`}
  line-height: 1.2 !important
`;

const Subtitle = tw.h2`
text-subtitle text-base mt-4 mb-6 w-2/5 mobile:text-sm mobile:w-full font-bold
`;

const ColoredButton = tw.button`
bg-colored rounded-md py-2 px-4 text-white font-bold text-base mr-4 focus:outline-none
`;
const GithubButton = tw.a`
bg-button rounded-md py-2 px-4 font-bold text-base text-primary focus:outline-none
`;

const Hero: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const value = { opened, setOpened };
  return (
    <DropdownContext.Provider value={value}>
      <HeroWrapper>
        <Caption>TvůjDezert mobilní aplikace</Caption>
        <Title>
          Podporuj <br /> <span className="text-colored">lokální podniky</span>{' '}
          <br /> a ušetři
        </Title>
        <Subtitle>
          Projekt zaměřený na pomoc lokálním kavárnám a cukrárnám za účelem
          pomoci v s tržbami době pandemie a nadcházející.
        </Subtitle>
        <div className="flex flex-row">
          <div className="relative">
            <ColoredButton
              onClick={() => setOpened(!opened)}
              aria-label="Otevřít dokumentaci"
            >
              Dokumentace
            </ColoredButton>
            <Dropdown />
          </div>
          <GithubButton
            href="https://github.com/breberafilip/maturitni-projekt"
            aria-label="Otevřít github"
          >
            GitHub
          </GithubButton>
        </div>
      </HeroWrapper>
    </DropdownContext.Provider>
  );
};
export default Hero;
