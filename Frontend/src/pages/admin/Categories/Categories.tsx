import { ButtonComponent } from '../../../components/button/button'
import { PathComponent } from '../../../components/Path/Path'
import { ICategori } from '../../../models/Categories'
import { TDComponent } from '../components/td'
import { THComponent } from '../components/th'

type Props = {
    categories: ICategori[];
}

const Categories = (props: Props) => {
    return (
        <div className="table w-full p-2">
            <div className="flex flex-nowrap p-3 m-2 bg-neutral-200">
                <PathComponent name1='Dashboard' name2='Categories' />
            </div>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-50 border-b">
                        <THComponent children="Id" />
                        <THComponent children="Name" />
                        <THComponent children="Action" />
                    </tr>
                </thead>
                <tbody>
                    {props.categories.map((item, index) => {
                        return <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                            <TDComponent children={index+1} />
                            <TDComponent children={item.name} />
                            <TDComponent children={<>
                                <ButtonComponent customStyle="bg-blue-500 text-white" >Edit</ButtonComponent>
                                <ButtonComponent customStyle="bg-red-500 text-white " >Remove</ButtonComponent>
                                </>} />
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Categories