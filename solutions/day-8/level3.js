// 1.question

let personAccount = {
	firstName: "satya",
	lastName: "surendra",
	incomes: 0,
	expenses: 0,
	totalIncome: function () {
		return;
	},
	totalExpenses: function () {
		return;
	},
	accountInfo: function () {
		return `Name : ${this.firstName} ${this.lastName}\nIncome: ${this.incomes}\nExpense: ${this.expenses}`;
	},
	addIncome: function () {
		return;
	},
	addExpense: function () {
		return;
	},
	accountBalance: function () {
		return;
	},
};

console.log(personAccount.accountInfo());

let users = [
	{
		_id: "ab12ex",
		username: "Alex",
		email: "alex@alex.com",
		password: "123123",
		createdAt: "08/01/2020 9:00 AM",
		isLoggedIn: false,
	},
	{
		_id: "fg12cy",
		username: "Asab",
		email: "asab@asab.com",
		password: "123456",
		createdAt: "08/01/2020 9:30 AM",
		isLoggedIn: true,
	},
	{
		_id: "zwf8md",
		username: "Brook",
		email: "brook@brook.com",
		password: "123111",
		createdAt: "08/01/2020 9:45 AM",
		isLoggedIn: true,
	},
	{
		_id: "eefamr",
		username: "Martha",
		email: "martha@martha.com",
		password: "123222",
		createdAt: "08/01/2020 9:50 AM",
		isLoggedIn: false,
	},
	{
		_id: "ghderc",
		username: "Thomas",
		email: "thomas@thomas.com",
		password: "123333",
		createdAt: "08/01/2020 10:00 AM",
		isLoggedIn: false,
	},
];

const products = [
	{
		_id: "eedfcf",
		name: "mobile phone",
		description: "Huawei Honor",
		price: 200,
		ratings: [
			{ userId: "fg12cy", rate: 5 },
			{ userId: "zwf8md", rate: 4.5 },
		],
		likes: [],
	},
	{
		_id: "aegfal",
		name: "Laptop",
		description: "MacPro: System Darwin",
		price: 2500,
		ratings: [],
		likes: ["fg12cy"],
	},
	{
		_id: "hedfcg",
		name: "TV",
		description: "Smart TV:Procaster",
		price: 400,
		ratings: [{ userId: "fg12cy", rate: 5 }],
		likes: ["fg12cy"],
	},
];

// 2.question

let signUp = (name) => {
	let len = users.filter((user) => user.username === name).length;
	if (len) {
		console.log(`This user already exits `);
	} else {
		users.push({
			_id: name,
			username: name,
			email: `${name}@${name}.com`,
			password: `${name}`,
			createdAt: new Date(),
			isLoggedIn: true,
		});
	}
};

// 2.b.question

let signIn = (name, password) => {
	let user = users.filter(
		(user) => user.username === name && user.password === password
	);
	if (user.length) {
		user.isLoggedIn = true;
		console.log(`Login successful`);
	} else {
		console.log(`Invalid username or password`);
	}
};

// 3.a.question

let rateProduct = (productId, userId, rate) => {
	let product = products.find((p) => {
		return p._id === productId;
	});
	product.ratings.push({
		userId: userId,
		rate: rate,
	});
};

// 3.b.question

let avgRateing = (productId) => {
	let product = products.find((p) => {
		return p._id === productId;
	});
	let totalRate = 0;
	product.ratings.forEach((p) => {
		totalRate = p.rate + totalRate;
	});
	return totalRate / product.ratings.length;
};
