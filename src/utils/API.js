import $ from 'jquery';

const getEmployee = () => {
  const employee = $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      console.log(data.results[0]);
    }
  });
  return employee;
};

export default getEmployee;
