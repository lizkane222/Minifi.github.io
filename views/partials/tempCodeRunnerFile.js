const secret = 'secret key';

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