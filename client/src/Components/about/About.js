import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

const About = () => (
    <div>
        <Card>
            <CardTitle title='Program' />
            <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
        </Card>
        <Card>
            <CardTitle title='Kontakt' />
            <CardText>
                aldkfjalkfdj
                lakdfjalkdfjqoeiruakjdfalfkjal
                alkfjlakfjdalkjfalkdjfalkfjalkdfj
            </CardText>
        </Card>
    </div>
);

export default About;
