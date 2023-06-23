import { Button } from '@chakra-ui/react';
import { GameHeading } from '../../shared/GameHeading';


const StartPage: React.FC = () => {
  return (
    <div>
      <GameHeading>Wizard</GameHeading>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log('game started!')}
      >
        Start
      </Button>
    </div>
  );
};

export default StartPage;
