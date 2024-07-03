import Box from "./box";
import HeadingTex from "./heading-text";


export default function Header () {
    return (
        <header className="py-6">
            <Box>
                <HeadingTex 
                    title={'App - crud - NextJs'} 
                    description={'Aprendiendo Next-serverActions'} 
                />
            </Box>
        </header>
    )
}