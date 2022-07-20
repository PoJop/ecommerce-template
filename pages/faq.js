import { Footer } from "../components/layers/footer/footer";
import Header from "../components/layers/header/header";
import { Main } from "../components/layers/main";


import { Accordion } from "../components/templates/accordion";
import { BoxWithRightNavSidebar } from "../components/wrappers/box-with-right-nav-sidebar";
import { Container } from "../components/wrappers/container";

const faq = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        description: "Vivamus imperdiet venenatis est. Phasellus vitae mauris imperdiet, condimentum eros vel, ullamcorper turpis. Maecenas sed libero quis orci egestas vehicula fermentum id diam. In sodales quam quis mi mollis eleifend id sit amet velit. Sed ultricies condimentum magna, vel commodo dolor luctus in. Aliquam et orci nibh. Nunc purus metus, aliquam vitae venenatis sit amet, porta non est. Proin vehicula nisi eu molestie varius. Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper, iaculis nibh quis, facilisis lorem. Sed malesuada eu lacus sit amet feugiat. Aenean iaculis dui sed quam consectetur elementum."
    },
    {
        title: "Nullam massa sem, mollis ut luctus at, tincidunt a lorem?",
        description: "Aliquam sed dictum elit, quis consequat metus. Proin in mauris finibus urna lacinia laoreet sed id orci. Pellentesque volutpat tellus sit amet enim rutrum, vel eleifend metus consectetur. Sed lacinia urna a neque maximus placerat. Praesent blandit hendrerit dui non placerat. Sed malesuada sem sit amet arcu faucibus, sit amet accumsan nisl laoreet. Quisque auctor sit amet nisl rhoncus interdum. Nullam euismod odio sem, quis pulvinar purus gravida eget. Nullam molestie, lacus vel vehicula elementum, massa arcu bibendum lacus, vitae tempus justo orci id lectus. Duis justo neque, elementum eget ante in, condimentum condimentum ante. Maecenas quis eleifend risus. In hac habitasse platea dictumst. Nunc posuere ultrices dolor, at auctor lacus dignissim ut. Donec viverra imperdiet nisi, sit amet mattis massa pellentesque ac."
    },
    {
        title: "Aliquam pretium diam et ullamcorper malesuada?",
        description: "Praesent feugiat lectus faucibus tellus congue pharetra. In viverra vehicula pellentesque. Etiam consectetur ultricies magna at bibendum. Sed posuere libero ut nulla ornare, faucibus pellentesque odio pulvinar. Vestibulum feugiat ex id ex elementum egestas. Integer laoreet mollis risus, id efficitur neque. Pellentesque quis dolor faucibus, ultrices tellus id, vestibulum neque. Sed eros purus, dignissim id fermentum ut, lacinia laoreet odio. Sed mi erat, aliquet at facilisis quis, laoreet in massa. Pellentesque eu massa accumsan, iaculis erat eu, tincidunt sem. Quisque id orci id dui congue pretium. Pellentesque iaculis, dolor aliquet tempor laoreet, enim metus tincidunt massa, ut porttitor sem dui sit amet arcu. Vestibulum sodales laoreet enim, sit amet vestibulum nisl porttitor a."
    },
    {
        title: "Etiam suscipit at nisi eget auctor?",
        description: "Mauris id pellentesque metus. In quis arcu sed enim maximus pellentesque et eget velit. Etiam euismod enim vitae condimentum tristique.                                "
    },
    {
        title: "Sed porta diam eget enim bibendum laoreet?",
        description: "Donec molestie sem et tellus vestibulum venenatis. Quisque iaculis ornare luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi velit nibh, ullamcorper eu imperdiet id, rutrum quis mi. Donec eu aliquet lorem. Nulla at lectus turpis. Sed et diam ac lorem iaculis lacinia.                                "
    },
]

export default function Faq() {
    return (
        <>
            <Header />
            <Main pageTitle={true} pageTitleProps={{ title: "FAQ", breadcrumbs: ['FAQ'] }}>
                <Container>
                    <BoxWithRightNavSidebar>
                        {faq.map((e, i) =>
                            <Accordion key={i} title={e.title} titleClass={"text-xl text-gray-900"}>
                                <p className="text-gray-600 text-[16px]">
                                    {e.description}
                                </p>
                            </Accordion>
                        )}
                    </BoxWithRightNavSidebar>
                </Container>
            </Main >
            <Footer />
        </>
    )
}
