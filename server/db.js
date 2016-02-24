import mongoose from 'mongoose';
import promise from 'bluebird';
mongoose.Promise = promise;

if (process.env.NODE_ENV === 'test') {
    mongoose.connect('mongodb://localhost/jugendsommer_test', () => {
        console.log('mongodb connected to test instance');
    });
} else {
    mongoose.connect('mongodb://localhost/jugendsommer', () => {
        console.log('mongodb connected');
    });
}

export default mongoose;
