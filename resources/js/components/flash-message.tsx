import {FlashMessages} from '@/types';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {CheckCircle2, AlertCircle, AlertTriangle, Info} from 'lucide-react';

interface FlashMessageProps {
    messages: FlashMessages;
}

export function FlashMessage({messages}: FlashMessageProps) {
    if (!messages || Object.keys(messages).length === 0) return null;

    return (
        <div className="space-y-2">
            {messages.success && (
                <Alert className="border-green-500 bg-green-50 text-green-900">
                    <CheckCircle2 className="h-4 w-4 text-green-600"/>
                    <AlertDescription>{messages.success}</AlertDescription>
                </Alert>
            )}
            {messages.error && (
                <Alert className="border-red-500 bg-red-50 text-red-900">
                    <AlertCircle className="h-4 w-4 text-red-600"/>
                    <AlertDescription>{messages.error}</AlertDescription>
                </Alert>
            )}
            {messages.warning && (
                <Alert className="border-yellow-500 bg-yellow-50 text-yellow-900">
                    <AlertTriangle className="h-4 w-4 text-yellow-600"/>
                    <AlertDescription>{messages.warning}</AlertDescription>
                </Alert>
            )}
            {messages.info && (
                <Alert className="border-blue-500 bg-blue-50 text-blue-900">
                    <Info className="h-4 w-4 text-blue-600"/>
                    <AlertDescription>{messages.info}</AlertDescription>
                </Alert>
            )}
        </div>
    );
}

