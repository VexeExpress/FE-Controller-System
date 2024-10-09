import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>BMS</Accordion.Header>
                <Accordion.Body style={styles.accordionBody}>
                    <ListGroup variant="flush">
                        <ListGroup.Item action>
                            <Link to={'/company'} style={{ textDecoration: 'none', color: 'black' }}>
                                <span style={{ fontSize: '14px', fontWeight: '600' }}>Danh sách đối tác</span>
                            </Link>
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>
    );
};

const styles = {
    accordionBody: {
        padding: 0,
    },
};

export default Menu;
