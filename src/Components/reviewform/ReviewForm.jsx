import React from 'react';
import {Button, Form} from "react-bootstrap";


const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
    return (
        <Form>

            <Form.Group className={'mb-3'} controlId={'exampleForm.ControlTextarea1'}>
                <Form.Label>
                    {labelText}
                </Form.Label>
                <Form.Control as={"textarea"} defaultValue={defaultValue} ref={revText} rows={3}></Form.Control>
            </Form.Group>

            <Button variant={"outline-info"} onClick={handleSubmit}>Submit</Button>

        </Form>
    );
};

export default ReviewForm;