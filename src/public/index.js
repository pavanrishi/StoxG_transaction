
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	Transcation_Rectangle46: tryRequire('./Transcation_Rectangle46.png') || require('./questionMark.png'),
	Transcation_Vector: tryRequire('./Transcation_Vector.png') || require('./questionMark.png'),
	Transcation_Vector_1: tryRequire('./Transcation_Vector_1.png') || require('./questionMark.png'),
	Transcation_Vector_2: tryRequire('./Transcation_Vector_2.png') || require('./questionMark.png'),
	Transcation_Bitcoin_1: tryRequire('./Transcation_Bitcoin_1.png') || require('./questionMark.png'),
	Transcation_Vector_3: tryRequire('./Transcation_Vector_3.png') || require('./questionMark.png'),
	Transcation_Vector_4: tryRequire('./Transcation_Vector_4.png') || require('./questionMark.png'),
	Transcation_Vector_5: tryRequire('./Transcation_Vector_5.png') || require('./questionMark.png'),
	Transcation_image10: tryRequire('./Transcation_image10.png') || require('./questionMark.png'),
	Transcation_Vector_6: tryRequire('./Transcation_Vector_6.png') || require('./questionMark.png'),
	Transcation_Vector_7: tryRequire('./Transcation_Vector_7.png') || require('./questionMark.png'),
	Transcation_Vector_8: tryRequire('./Transcation_Vector_8.png') || require('./questionMark.png'),
	Transcation_Vector_9: tryRequire('./Transcation_Vector_9.png') || require('./questionMark.png'),
	Transcation_Vector_10: tryRequire('./Transcation_Vector_10.png') || require('./questionMark.png'),
	Transcation_Vector_11: tryRequire('./Transcation_Vector_11.png') || require('./questionMark.png'),
	Transcation_Vector_12: tryRequire('./Transcation_Vector_12.png') || require('./questionMark.png'),
	Transcation_Profit: tryRequire('./Transcation_Profit.png') || require('./questionMark.png'),
	Transcation_Spendingcut: tryRequire('./Transcation_Spendingcut.png') || require('./questionMark.png'),
	Transcation_Profits: tryRequire('./Transcation_Profits.png') || require('./questionMark.png'),
	Transcation_Line229: tryRequire('./Transcation_Line229.png') || require('./questionMark.png'),
	Transcation_Ellipse75: tryRequire('./Transcation_Ellipse75.png') || require('./questionMark.png'),
	Transcation_Ellipse76: tryRequire('./Transcation_Ellipse76.png') || require('./questionMark.png'),
	Transcation_Ellipse77: tryRequire('./Transcation_Ellipse77.png') || require('./questionMark.png'),
	Transcation_Vector_13: tryRequire('./Transcation_Vector_13.png') || require('./questionMark.png'),
	Transcation_Vector_14: tryRequire('./Transcation_Vector_14.png') || require('./questionMark.png'),
	Transcation_Vector_15: tryRequire('./Transcation_Vector_15.png') || require('./questionMark.png'),
}