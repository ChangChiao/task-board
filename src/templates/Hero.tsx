import Link from 'next/link';

import { Button } from '../components/atoms/button/Button';
import Card from '../components/atoms/Card';
import { Background } from '../components/background/Background';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const obj = {
  title: '123',
  description: '222',
  cover: '1222',
  author: 'mike',
  imageAlt: 'sdeee',
  reward: 200,
  startTime: new Date(),
  endTime: new Date(),
};

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <Card {...obj} />
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Your Free Theme</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
