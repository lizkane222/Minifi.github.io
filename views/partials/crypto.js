// FROM ADVANCED CONNECTIONS 2 TRAINING : https://www.youtube.com/watch?v=9vuexf8yzxQ
const crypto = require('crypto');

// basic hashing algorithm md5 that's easy to replicate but can be used to hide basic data like email addresses
const hash1 = (password) => {
    let hashedVal = crypto.createHash('md5')
      .update(password)
      .digest('hex');
    console.log(hashedVal)
    return hashedVal
} 

hash1('lizzzzzzzzzzzzz')
// console.log(`hash1 : `,hash1);


// more secure hashing algorithm sha256
// const secret = 'secret key';

// const hash2 = crypto.createHmac('sha256',secret)
//     .update('password')
//     .digest('hex');

// console.log(`hash2 : `,hash2);



// // encrypt and decrypt some data
// const algorithm = 'aes-192-cbc'
// const password = 'Password used to generate key';
// const key = crypto.scryptSync(password, 'salt', 24);
// const cipher = crypto.createCipheriv(algorithm, key);

// let encrypted = '';
// cipher.on('readable', () => {
//     let chunk;
//     while (null !== (chunk = cipher.read())) {
//         encrypted += chunk.toString('hex');
//     }
// });
// cipher.on('end', () => console.log(encrypted));

// cipher.write('some clear text data');
// cipher.write('qazwsxedcrfvtgbyhnujm');
// cipher.end();


// const decipher = crypto.createDecipheriv(algorithm, key);
// decipher.on('readable',() => {
//     while (null !== (chunk = decipher.read())){
//         decrypted += chunk.toString('utf8');
//     }
// });
// decipher.on('end', () => console.log(decrypted));

// // const encrypted = '';
// decipher.write(encrypted, 'hex');
// decipher.end();