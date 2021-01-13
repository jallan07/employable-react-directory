import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getData: function () {
    return (
      axios
        // i want to get the following fields: picture, name, phone, email, dob
        .get(
          'https://randomuser.me/api/?results=75&nat=us&inc=picture,name,phone,email,dob'
        )
    );
  }
};
