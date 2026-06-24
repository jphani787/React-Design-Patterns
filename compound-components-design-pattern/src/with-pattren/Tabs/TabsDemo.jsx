import Tabs from "./Tabs";

export default function TabsDemo() {
    return (
        <Tabs>
            <Tabs.Item title="Home">
                <p>This is Home Pgae</p>
            </Tabs.Item>
            <Tabs.Item title="About">
                <p>This is About Pgae</p>
            </Tabs.Item>
            <Tabs.Item title="Contact">
                <p>This is Contact Pgae</p>
            </Tabs.Item>
        </Tabs>
    );
}

