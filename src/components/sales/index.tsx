import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Sales() {
 return (
   <Card className="flex-1">
    <CardHeader>
        <div className="flex items-center justify-center">
        <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos Clientes 
        </CardTitle>
        <CircleDollarSign className="ml-auto w-4 h-4"/>
        </div>
        <CardDescription>
            Novos clientes nas Últimas 24 horas
        </CardDescription>
    </CardHeader>

    <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/albertosoneha/robedev.png"/>
                <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm sm:text-base font-semibold" >Alberto Mbundi</p>
                <span className="text-[12px] sm:text-sm text-gray-400">albertombundi@gmail.com</span>
            </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/img1.png"/>
                <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm sm:text-base font-semibold">Carlos Mendes</p>
                <span className="text-[12px] sm:text-sm text-gray-400">carlosmendes@hotmail.com</span>
            </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/img2.png"/>
                <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm sm:text-base font-semibold" >João Mateus</p>
                <span className="text-[12px] sm:text-sm text-gray-400">joaomateus@outlook.com</span>
            </div>
        </article>
    </CardContent>
   </Card>
 );
}