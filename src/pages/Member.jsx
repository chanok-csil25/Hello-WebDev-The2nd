import Modie from '../assets/Icon/Modie-big.png';
import MemberAi from '../assets/member/Ai.png';
import MemberBook from '../assets/member/Book.png';
import MemberBoom from '../assets/member/Boom.png';
import MemberPierce from '../assets/member/Pierce.png';
import MemberSmark from '../assets/member/Smark.png';
import MemberTurbo from '../assets/member/Turbo.png';
import Background from '../assets/Icon/grass.png';



const Member = () => {
    return (
        <>
            <div className=' flex flex-row justify-center gap-[10rem]'>
                <div>
                    <img src={Modie} alt="" />
                </div>
                <div className=' text-[150px] font-itim text-purple flex items-center' style={{ textShadow: '8px 3px 3px #FFC300' }}>
                    Member
                </div>
            </div>
            <div className=' flex justify-center mt-[5rem] '>
                <table className=' '>
                    <tr className=''>
                        <th className=' adjsut-scale'><img src={MemberAi} alt="" /></th>
                        <th className=' adjsut-scale'><img src={MemberTurbo} alt="" /></th>
                        <th className=' adjsut-scale'><img src={MemberBoom} alt="" /></th>
                        <th className=' adjsut-scale'><img src={MemberPierce} alt="" /></th>
                        <th className=' adjsut-scale'><img src={MemberSmark} alt="" /></th>
                        <th className=' adjsut-scale'><img src={MemberBook} alt="" /></th>
                    </tr>
                    <tr className=' h-[500px]' style={{backgroundImage:`url(${Background})`}}>
                        <td className=' text-[64px] text-center font-itim text-cream'>Ai <br /> <span className=' font-itim text-[40px] text-white'>Web design</span></td>
                        <td className=' text-[64px] text-center font-itim text-cream'>Turbo <br /> <span className=' font-itim text-[40px] text-white'>Web design</span></td>
                        <td className=' text-[64px] text-center font-itim text-cream'>Boom <br /> <span className=' font-itim text-[40px] text-white'>Front-End</span></td>
                        <td className=' text-[64px] text-center font-itim text-cream'>Pierce <br /> <span className=' font-itim text-[40px] text-white'>Front-End</span></td>
                        <td className=' text-[64px] text-center font-itim text-cream'>Smark <br /> <span className=' font-itim text-[40px] text-white'>Front-End</span></td>
                        <td className=' text-[64px] text-center font-itim text-cream'>Book <br /> <span className=' font-itim text-[40px] text-white'>DevOps</span></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Member