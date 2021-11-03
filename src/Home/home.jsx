import React from 'react';
import {Container, Header, Segment, Card, Button} from "semantic-ui-react";

function Home(props) {
    return (
        <>
            <Container id="containerWrap">

                <Header as="h2">
                    <Segment piled>
                        Quiz
                    </Segment>
                </Header>

                <p>Challenge your friends in this awesome question and answer game.</p>
                <Card fluid>
                    <Card.Content>
                        Access right now!
                    </Card.Content>
                    <Card.Content>
                        <Button basic color='blue'>
                            Login with Facebook
                        </Button>
                        <Button basic color='green'>
                            Admin User
                        </Button>
                    </Card.Content>
                </Card>
                {/*<Segment piled>Quiz</Segment>

                <Card.Header>QUIZ GAME</Card.Header>
                <Card.Description>
                    A game with questions and answers
                </Card.Description>
                <Card fluid>
                    <Card.Content>
                        Access Now
                    </Card.Content>

                    <Card.Content extra>
                        <div className='ui buttons'>
                            <Button basic color='blue'>
                                Login with Facebook
                            </Button>
                            <Button basic color='green'>
                               Admin User
                            </Button>
                        </div>
                    </Card.Content>

                </Card>*/}

            </Container>
        </>
    )
        ;
}

export default Home;