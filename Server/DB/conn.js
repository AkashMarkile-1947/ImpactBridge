const mongoose =  require('mongoose');
require('dotenv').config();

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
        family: 4
	};
	try {
		//'mongodb+srv://impactbridge2022:1234@impactbridge.mw7ctdm.mongodb.net/'
		mongoose.connect( process.env.LOCAL_DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};