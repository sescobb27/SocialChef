simon = {
  name: "Simon",
  email: "user@user.com",
  rate: 0.0,
  address: null,
  telephone_number: null,
  picture: null
};
test("User Attr", function () {
  var u = SocialChef.User.create(simon);
  var result = u.get('name');
  equal(result, "Simon", "wrong");
});