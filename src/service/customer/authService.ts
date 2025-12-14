// import { ICustomerRepo } from "../../interface/customer/authServiceInterface";
// import bcrypt from "bcrypt"
// import { generateRefreshToken, generateToken } from "../../utils/jwt";
// export class CustomerAuthService{
//     constructor(private _customerRepo:ICustomerRepo){}
//     register=async(fullName:string,phoneNumber:string,password:string)=>{
//         try {
//             const hashedPassword=await bcrypt.hash(password,10);
//             const otp = Math.floor(100000 + Math.random() * 900000).toString();
//             const hashedOtp = await bcrypt.hash(otp, 10);
//             const otpExpires = new Date(Date.now() + 5 * 60 * 1000);
//             const data={
//                 fullName,
//                 phoneNumber,
//                 password:hashedPassword,
//                 isAdmin:false,
//                 otp:hashedOtp,
//                 otpExpires

//             }
//             const customer=await this._customerRepo.create(data)

//             const token=await generateToken(customer._id.toString(),customer.isAdmin)
//             const refreshToken = generateRefreshToken(customer._id.toString(),customer.isAdmin);
//             return {customer,token,refreshToken}
//         } catch (error) {
//             console.log("Error in register :",error)
//             throw error
//         }
//     }
    
//     // async verifyOtp(email: string, otp: string) {
//     //     const customer = await this._authRepo.findByEmail(email);

//     //     if (!customer) {
//     //         throw { status: HttpStatus.BAD_REQUEST, message: Messages.USER_NOT_FOUND };
//     //     }


//     //     if (!customer.otp || !customer.otpExpires || Date.now() > customer.otpExpires) {
//     //         throw { status: HttpStatus.BAD_REQUEST, message: Messages.INVALID_OTP };
//     //     }

//     //     const isMatch = await bcrypt.compare(otp.trim(), customer.otp);
//     //     if (!isMatch) {
//     //         throw { status: HttpStatus.BAD_REQUEST, message: Messages.INVALID_OTP };
//     //     }

//     //     customer.otp = null;
//     //     customer.otpExpires = null;

//     //     await this._authRepo.saveUser(customer);
//     //     return {
//     //         customer,
//     //         message: "OTP verified successfully",
//     //     };
//     // }
//     // async resendOtp(email: string): Promise<string> {
//     //     const customer = await this._authRepo.findByEmail(email);

//     //     if (!customer) {
//     //         throw { status: HttpStatus.NOT_FOUND, message: Messages.USER_NOT_FOUND };
//     //     }

//     //     const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     //     const hashedOtp = await bcrypt.hash(newOtp, 10);
//     //     const otpExpires = Date.now() + 2 * 60 * 1000;

//     //     customer.otp = hashedOtp;
//     //     customer.otpExpires = otpExpires;
//     //     await this._authRepo.saveUser(customer);

//     //     sendVerificationEmail(email, newOtp);
//     //     console.log(`New OTP for ${email}: ${newOtp}`);
//     //     return "OTP resent successfully";
//     // }
//     // async Login(email: string, password: string) {

//     //     const user = await this._authRepo.findByEmail(email);

//     //     if (!user) {
//     //         throw { status: HttpStatus.NOT_FOUND, message:Messages.USER_NOT_FOUND };
//     //     }

//     //     if (user.isBlocked) {
//     //         throw { status: HttpStatus.NOT_FOUND, message: Messages.ACCOUNT_BLOCKED };
//     //     }

//     //     if (!user.password) {
//     //         throw { status: HttpStatus.BAD_REQUEST, message: "Password is missing for this user" };
//     //     }

//     //     const isMatch = await bcrypt.compare(password, user.password);
//     //     if (!isMatch) {
//     //         throw { status: HttpStatus.UNAUTHORIZED, message: Messages.PASSWORD_DO_NOT_MATCH };
//     //     }

//     //     const id = typeof user._id === "string" ? user._id : String(user._id);
//     //     const token = generateToken(id, user.role);
//     //     const refreshToken = generateRefreshToken(id, user.role);

//     //     return {
//     //         user,
//     //         token,
//     //         refreshToken,
//     //     };
//     // }
// }