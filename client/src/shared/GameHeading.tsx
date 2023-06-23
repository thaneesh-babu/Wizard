import {chakra, Heading} from '@chakra-ui/react';

export const GameHeading = chakra(Heading, {
    baseStyle: {
        fontSize: '4rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        textTransform: 'uppercase',
        letterSpacing: '0.5rem',
        '@media (max-width: 768px)': {
            fontSize: '3rem',
        },
    },
});

