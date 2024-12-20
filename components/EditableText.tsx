import { useState } from "react";
import { PencilLine, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EditableText = ({ initialText, onSave, className }: {initialText: string, onSave: Function, className: string}) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(initialText);

    const handleEdit = () => setEditing(true);
    const handleSave = () => {
        setEditing(false);
        onSave(text);
    };

    return (
        <div className="relative group">
            {editing ? (
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={`bg-white text-black px-2 ${className}`}
                />
            ) : (
                <span className={className}>{text}</span>
            )}
            {!editing && (
                <Button
                    onClick={handleEdit}
                    className="absolute -top-8 -right-8 bg-blue-500 hover:bg-blue-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <PencilLine className="h-4 w-4" />
                </Button>
            )}
            {editing && (
                <Button
                    onClick={handleSave}
                    className="absolute -top-8 -right-8 bg-green-500 hover:bg-green-600 p-2 rounded-full"
                >
                    <Save className="h-4 w-4" />
                </Button>
            )}
        </div>
    );
};
