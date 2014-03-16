simon = {
  name: "Simon",
  email: "user@user.com",
  rate: 5.0,
  address: "calle siempre viva",
  telephone_number: "4444444",
  picture: "some/weird/path"
};

test("Should Create First User", function () {
  var u = SocialChef.User.create(simon);
  var name = u.get('name');
  var email = u.get('email');
  var rate = u.get('rate');
  var address = u.get('address');
  var telephone = u.get('telephone_number');
  var picture = u.get('picture');
  equal(name, "Simon", "wrong name, should be Simon");
  equal(email, "user@user.com", "wrong email, should be user@user.com");
  equal(rate, "5.0", "wrong rate, should be 5.0");
  equal(address, "calle siempre viva", "wrong address, should be calle siempre viva");
  equal(telephone, "4444444", "wrong telephone, should be 4444444");
  equal(picture, "some/weird/path", "wrong picture, should be some/weird/path");
});